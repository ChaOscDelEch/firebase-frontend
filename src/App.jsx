import {useState} from 'react';
import {useQuery, useMutation, useQueryClient} from '@tanstack/react-query';
import {readNotes, createNote} from './firebase';
import ModuleDetail from './ModuleDetail';

function App() {
  const [showModuleDetail, setShowModuleDetail] = useState(false);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [error, setError] = useState('');

  const queryClient = useQueryClient();

  // Use TanStack Query for fetching notes with caching
  const {data: notesData, isLoading} = useQuery({
    queryKey: ['notes'],
    queryFn: async () => {
      const result = await readNotes();
      return result.data.notes || [];
    },
  });

  // Use mutation for creating notes
  const createNoteMutation = useMutation({
    mutationFn: async (noteData) => {
      const result = await createNote(noteData);
      return result.data.note;
    },
    onSuccess: () => {
      // Invalidate and refetch notes after successful creation
      queryClient.invalidateQueries({queryKey: ['notes']});
      setTitle('');
      setContent('');
      setError('');
    },
    onError: (err) => {
      setError('Failed to create note: ' + err.message);
      console.error(err);
    },
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Trim whitespace before validation
    const trimmedTitle = title.trim();
    const trimmedContent = content.trim();

    if (!trimmedTitle || !trimmedContent) {
      setError('Title and content are required and cannot be empty');
      return;
    }

    createNoteMutation.mutate({title: trimmedTitle, content: trimmedContent});
  };

  const notes = notesData || [];
  const loading = isLoading || createNoteMutation.isPending;

  if (showModuleDetail) {
    return (
      <div>
        <button
          onClick={() => setShowModuleDetail(false)}
          style={{
            position: 'fixed',
            top: '20px',
            right: '20px',
            padding: '10px 20px',
            background: '#667eea',
            color: 'white',
            border: 'none',
            borderRadius: '8px',
            cursor: 'pointer',
            fontWeight: '600',
            zIndex: 1000,
            boxShadow: '0 4px 12px rgba(0,0,0,0.15)'
          }}
        >
          ← Back to Notes App
        </button>
        <ModuleDetail />
      </div>
    );
  }

  return (
    <div style={{ 
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      padding: '40px 20px',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif'
    }}>
      <div style={{ maxWidth: '900px', margin: '0 auto' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '40px' }}>
          <h1 style={{ 
            color: 'white', 
            fontSize: '3rem', 
            fontWeight: '700',
            margin: 0,
            textShadow: '2px 2px 4px rgba(0,0,0,0.2)',
            letterSpacing: '-1px'
          }}>
            📝 Notes App
          </h1>
          <button
            onClick={() => setShowModuleDetail(true)}
            style={{
              padding: '12px 24px',
              background: 'white',
              color: '#667eea',
              border: 'none',
              borderRadius: '10px',
              cursor: 'pointer',
              fontWeight: '600',
              fontSize: '1rem',
              boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
              transition: 'transform 0.2s'
            }}
            onMouseEnter={(e) => e.target.style.transform = 'translateY(-2px)'}
            onMouseLeave={(e) => e.target.style.transform = 'translateY(0)'}
          >
            📚 View Module Detail
          </button>
        </div>
        
        {error && (
          <div style={{ 
            padding: '16px 20px', 
            background: '#fee', 
            color: '#c53030',
            marginBottom: '24px',
            borderRadius: '12px',
            border: '2px solid #fc8181',
            fontWeight: '500',
            boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
          }}>
            ⚠️ {error}
          </div>
        )}

        <div style={{ 
          marginBottom: '40px', 
          padding: '32px', 
          background: 'white',
          borderRadius: '16px',
          boxShadow: '0 10px 40px rgba(0,0,0,0.15)'
        }}>
          <h2 style={{ 
            marginTop: '0',
            marginBottom: '24px',
            fontSize: '1.75rem',
            fontWeight: '600',
            color: '#2d3748',
            letterSpacing: '-0.5px'
          }}>
            ✨ Create New Note
          </h2>
          <form onSubmit={handleSubmit}>
            <div style={{ marginBottom: '16px' }}>
              <label style={{
                display: 'block',
                marginBottom: '8px',
                fontSize: '0.875rem',
                fontWeight: '600',
                color: '#4a5568',
                textTransform: 'uppercase',
                letterSpacing: '0.5px'
              }}>
                Title
              </label>
              <input
                type="text"
                placeholder="Enter your note title..."
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                style={{ 
                  width: '100%', 
                  padding: '14px 16px', 
                  fontSize: '1rem',
                  border: '2px solid #e2e8f0',
                  borderRadius: '10px',
                  boxSizing: 'border-box',
                  fontFamily: 'inherit',
                  transition: 'border-color 0.2s',
                  outline: 'none'
                }}
                disabled={loading}
                onFocus={(e) => e.target.style.borderColor = '#667eea'}
                onBlur={(e) => e.target.style.borderColor = '#e2e8f0'}
              />
            </div>
            <div style={{ marginBottom: '24px' }}>
              <label style={{
                display: 'block',
                marginBottom: '8px',
                fontSize: '0.875rem',
                fontWeight: '600',
                color: '#4a5568',
                textTransform: 'uppercase',
                letterSpacing: '0.5px'
              }}>
                Content
              </label>
              <textarea
                placeholder="Write your thoughts here..."
                value={content}
                onChange={(e) => setContent(e.target.value)}
                rows="5"
                style={{ 
                  width: '100%', 
                  padding: '14px 16px', 
                  fontSize: '1rem',
                  border: '2px solid #e2e8f0',
                  borderRadius: '10px',
                  boxSizing: 'border-box',
                  fontFamily: 'inherit',
                  resize: 'vertical',
                  transition: 'border-color 0.2s',
                  outline: 'none',
                  lineHeight: '1.6'
                }}
                disabled={loading}
                onFocus={(e) => e.target.style.borderColor = '#667eea'}
                onBlur={(e) => e.target.style.borderColor = '#e2e8f0'}
              />
            </div>
            <button 
              type="submit" 
              disabled={loading}
              style={{ 
                padding: '14px 32px', 
                background: loading ? '#cbd5e0' : 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                color: 'white', 
                border: 'none', 
                borderRadius: '10px',
                cursor: loading ? 'not-allowed' : 'pointer',
                fontSize: '1rem',
                fontWeight: '600',
                boxShadow: loading ? 'none' : '0 4px 12px rgba(102, 126, 234, 0.4)',
                transition: 'all 0.3s',
                width: '100%',
                textTransform: 'uppercase',
                letterSpacing: '1px'
              }}
              onMouseEnter={(e) => !loading && (e.target.style.transform = 'translateY(-2px)')}
              onMouseLeave={(e) => !loading && (e.target.style.transform = 'translateY(0)')}
            >
              {loading ? '⏳ Creating...' : '➕ Create Note'}
            </button>
          </form>
        </div>

        <div>
          <h2 style={{ 
            color: 'white',
            fontSize: '2rem',
            fontWeight: '600',
            marginBottom: '24px',
            textShadow: '1px 1px 3px rgba(0,0,0,0.2)',
            letterSpacing: '-0.5px'
          }}>
            📚 All Notes ({notes.length})
          </h2>
          {loading && <p style={{ color: 'white', fontSize: '1.125rem' }}>⏳ Loading...</p>}
          {notes.length === 0 && !loading && (
            <p style={{ 
              color: 'white', 
              fontSize: '1.125rem',
              textAlign: 'center',
              background: 'rgba(255,255,255,0.1)',
              padding: '32px',
              borderRadius: '12px',
              backdropFilter: 'blur(10px)'
            }}>
              📭 No notes yet. Create your first note above!
            </p>
          )}
          <div>
            {notes.map((note, index) => (
              <div 
                key={note.id} 
                style={{ 
                  padding: '24px', 
                  marginBottom: '16px', 
                  background: 'white',
                  border: 'none',
                  borderRadius: '12px',
                  boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                  transition: 'transform 0.2s, box-shadow 0.2s',
                  cursor: 'default'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-4px)';
                  e.currentTarget.style.boxShadow = '0 8px 24px rgba(0,0,0,0.15)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.1)';
                }}
              >
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  marginBottom: '12px'
                }}>
                  <span style={{
                    fontSize: '1.5rem',
                    marginRight: '12px'
                  }}>
                    {['📌', '📝', '💡', '⭐', '🎯'][index % 5]}
                  </span>
                  <h3 style={{ 
                    margin: 0,
                    fontSize: '1.5rem',
                    fontWeight: '600',
                    color: '#2d3748',
                    letterSpacing: '-0.5px'
                  }}>
                    {note.title}
                  </h3>
                </div>
                <p style={{ 
                  margin: 0,
                  fontSize: '1rem',
                  lineHeight: '1.7',
                  color: '#4a5568'
                }}>
                  {note.content}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
