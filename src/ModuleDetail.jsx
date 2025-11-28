import { useState } from 'react';

function ModuleDetail() {
  const [comments, setComments] = useState([
    {
      id: 1,
      author: 'Sarah Johnson',
      date: '2025-11-20',
      content: 'Great module! The exercises were very helpful for understanding the concepts.',
      avatar: 'SJ'
    },
    {
      id: 2,
      author: 'Michael Chen',
      date: '2025-11-22',
      content: 'Could you provide more examples on the advanced topics? Overall excellent content.',
      avatar: 'MC'
    }
  ]);

  const [newComment, setNewComment] = useState('');

  const handleSubmitComment = (e) => {
    e.preventDefault();
    if (!newComment.trim()) return;

    const comment = {
      id: Date.now(),
      author: 'Current User',
      date: new Date().toISOString().split('T')[0],
      content: newComment,
      avatar: 'CU'
    };

    setComments([...comments, comment]);
    setNewComment('');
  };

  const moduleData = {
    title: 'Web Development Fundamentals',
    code: 'WBS-101',
    duration: '4 weeks',
    level: 'Beginner',
    description: 'Learn the fundamentals of web development including HTML, CSS, and JavaScript. This module covers everything you need to start building modern web applications.',
    objectives: [
      'Understand HTML5 semantic markup',
      'Master CSS3 styling and layouts',
      'Learn JavaScript basics and DOM manipulation',
      'Build responsive web pages'
    ],
    resources: [
      { name: 'Course Materials.pdf', size: '2.4 MB' },
      { name: 'Exercise Files.zip', size: '15.8 MB' },
      { name: 'Lecture Slides.pptx', size: '8.2 MB' }
    ]
  };

  return (
    <div style={{
      minHeight: '100vh',
      background: '#f7f9fc',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif'
    }}>
      {/* Header */}
      <div style={{
        background: 'white',
        borderBottom: '1px solid #e1e8ed',
        padding: '16px 0'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 24px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <div style={{
              width: '40px',
              height: '40px',
              background: '#0066cc',
              borderRadius: '8px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'white',
              fontWeight: '700',
              fontSize: '1.25rem'
            }}>
              W
            </div>
            <h1 style={{
              margin: 0,
              fontSize: '1.5rem',
              fontWeight: '600',
              color: '#1a1a1a'
            }}>
              WBS Coding School
            </h1>
          </div>
          <nav style={{ display: 'flex', gap: '32px' }}>
            <a href="#" style={{ color: '#0066cc', textDecoration: 'none', fontWeight: '500' }}>Modules</a>
            <a href="#" style={{ color: '#666', textDecoration: 'none', fontWeight: '500' }}>Progress</a>
            <a href="#" style={{ color: '#666', textDecoration: 'none', fontWeight: '500' }}>Resources</a>
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '32px 24px'
      }}>
        {/* Breadcrumb */}
        <div style={{
          marginBottom: '24px',
          fontSize: '0.875rem',
          color: '#666'
        }}>
          <span>Modules</span>
          <span style={{ margin: '0 8px' }}>/</span>
          <span style={{ color: '#0066cc', fontWeight: '500' }}>Module Detail</span>
        </div>

        {/* Module Header Card */}
        <div style={{
          background: 'white',
          borderRadius: '8px',
          padding: '32px',
          marginBottom: '24px',
          boxShadow: '0 1px 3px rgba(0,0,0,0.08)',
          border: '1px solid #e1e8ed'
        }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', marginBottom: '16px' }}>
            <div>
              <div style={{
                display: 'inline-block',
                padding: '4px 12px',
                background: '#e8f4ff',
                color: '#0066cc',
                borderRadius: '4px',
                fontSize: '0.75rem',
                fontWeight: '600',
                textTransform: 'uppercase',
                letterSpacing: '0.5px',
                marginBottom: '12px'
              }}>
                {moduleData.code}
              </div>
              <h2 style={{
                margin: '0 0 8px 0',
                fontSize: '2rem',
                fontWeight: '600',
                color: '#1a1a1a',
                lineHeight: '1.3'
              }}>
                {moduleData.title}
              </h2>
            </div>
            <button style={{
              padding: '10px 24px',
              background: '#0066cc',
              color: 'white',
              border: 'none',
              borderRadius: '6px',
              fontSize: '0.875rem',
              fontWeight: '600',
              cursor: 'pointer',
              transition: 'background 0.2s'
            }}
            onMouseEnter={(e) => e.target.style.background = '#0052a3'}
            onMouseLeave={(e) => e.target.style.background = '#0066cc'}
            >
              Enroll Now
            </button>
          </div>

          <div style={{
            display: 'flex',
            gap: '32px',
            marginBottom: '24px',
            paddingBottom: '24px',
            borderBottom: '1px solid #e1e8ed'
          }}>
            <div>
              <div style={{ fontSize: '0.75rem', color: '#666', marginBottom: '4px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Duration</div>
              <div style={{ fontSize: '0.9375rem', fontWeight: '600', color: '#1a1a1a' }}>{moduleData.duration}</div>
            </div>
            <div>
              <div style={{ fontSize: '0.75rem', color: '#666', marginBottom: '4px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Level</div>
              <div style={{ fontSize: '0.9375rem', fontWeight: '600', color: '#1a1a1a' }}>{moduleData.level}</div>
            </div>
            <div>
              <div style={{ fontSize: '0.75rem', color: '#666', marginBottom: '4px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Students</div>
              <div style={{ fontSize: '0.9375rem', fontWeight: '600', color: '#1a1a1a' }}>1,234</div>
            </div>
          </div>

          <p style={{
            margin: 0,
            fontSize: '1rem',
            lineHeight: '1.6',
            color: '#4a4a4a'
          }}>
            {moduleData.description}
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '24px' }}>
          {/* Left Column */}
          <div>
            {/* Learning Objectives */}
            <div style={{
              background: 'white',
              borderRadius: '8px',
              padding: '28px',
              marginBottom: '24px',
              boxShadow: '0 1px 3px rgba(0,0,0,0.08)',
              border: '1px solid #e1e8ed'
            }}>
              <h3 style={{
                margin: '0 0 20px 0',
                fontSize: '1.25rem',
                fontWeight: '600',
                color: '#1a1a1a'
              }}>
                Learning Objectives
              </h3>
              <ul style={{
                margin: 0,
                padding: 0,
                listStyle: 'none'
              }}>
                {moduleData.objectives.map((objective, index) => (
                  <li key={index} style={{
                    padding: '12px 0',
                    borderBottom: index < moduleData.objectives.length - 1 ? '1px solid #f0f0f0' : 'none',
                    display: 'flex',
                    alignItems: 'start',
                    gap: '12px'
                  }}>
                    <span style={{
                      width: '20px',
                      height: '20px',
                      background: '#e8f4ff',
                      color: '#0066cc',
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '0.75rem',
                      fontWeight: '600',
                      flexShrink: 0,
                      marginTop: '2px'
                    }}>
                      ✓
                    </span>
                    <span style={{ color: '#4a4a4a', fontSize: '0.9375rem', lineHeight: '1.5' }}>
                      {objective}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Comments Section */}
            <div style={{
              background: 'white',
              borderRadius: '8px',
              padding: '28px',
              boxShadow: '0 1px 3px rgba(0,0,0,0.08)',
              border: '1px solid #e1e8ed'
            }}>
              <h3 style={{
                margin: '0 0 24px 0',
                fontSize: '1.25rem',
                fontWeight: '600',
                color: '#1a1a1a'
              }}>
                Comments ({comments.length})
              </h3>

              {/* Comment Form */}
              <form onSubmit={handleSubmitComment} style={{ marginBottom: '32px' }}>
                <textarea
                  placeholder="Add a comment..."
                  value={newComment}
                  onChange={(e) => setNewComment(e.target.value)}
                  rows="3"
                  style={{
                    width: '100%',
                    padding: '12px',
                    border: '1px solid #e1e8ed',
                    borderRadius: '6px',
                    fontSize: '0.9375rem',
                    fontFamily: 'inherit',
                    resize: 'vertical',
                    marginBottom: '12px',
                    boxSizing: 'border-box',
                    outline: 'none',
                    transition: 'border-color 0.2s'
                  }}
                  onFocus={(e) => e.target.style.borderColor = '#0066cc'}
                  onBlur={(e) => e.target.style.borderColor = '#e1e8ed'}
                />
                <button
                  type="submit"
                  style={{
                    padding: '8px 20px',
                    background: '#0066cc',
                    color: 'white',
                    border: 'none',
                    borderRadius: '6px',
                    fontSize: '0.875rem',
                    fontWeight: '600',
                    cursor: 'pointer',
                    transition: 'background 0.2s'
                  }}
                  onMouseEnter={(e) => e.target.style.background = '#0052a3'}
                  onMouseLeave={(e) => e.target.style.background = '#0066cc'}
                >
                  Post Comment
                </button>
              </form>

              {/* Comments List */}
              <div>
                {comments.map((comment) => (
                  <div key={comment.id} style={{
                    padding: '20px 0',
                    borderTop: '1px solid #f0f0f0'
                  }}>
                    <div style={{ display: 'flex', gap: '12px' }}>
                      <div style={{
                        width: '40px',
                        height: '40px',
                        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'white',
                        fontWeight: '600',
                        fontSize: '0.875rem',
                        flexShrink: 0
                      }}>
                        {comment.avatar}
                      </div>
                      <div style={{ flex: 1 }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                          <span style={{ fontWeight: '600', color: '#1a1a1a', fontSize: '0.9375rem' }}>
                            {comment.author}
                          </span>
                          <span style={{ fontSize: '0.8125rem', color: '#999' }}>
                            {comment.date}
                          </span>
                        </div>
                        <p style={{
                          margin: 0,
                          fontSize: '0.9375rem',
                          lineHeight: '1.6',
                          color: '#4a4a4a'
                        }}>
                          {comment.content}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Sidebar */}
          <div>
            {/* Resources Card */}
            <div style={{
              background: 'white',
              borderRadius: '8px',
              padding: '24px',
              boxShadow: '0 1px 3px rgba(0,0,0,0.08)',
              border: '1px solid #e1e8ed',
              marginBottom: '24px'
            }}>
              <h3 style={{
                margin: '0 0 16px 0',
                fontSize: '1.125rem',
                fontWeight: '600',
                color: '#1a1a1a'
              }}>
                Course Resources
              </h3>
              <div>
                {moduleData.resources.map((resource, index) => (
                  <a
                    key={index}
                    href="#"
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      padding: '12px 0',
                      borderBottom: index < moduleData.resources.length - 1 ? '1px solid #f0f0f0' : 'none',
                      textDecoration: 'none',
                      color: 'inherit',
                      transition: 'background 0.2s'
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                      <span style={{ fontSize: '1.25rem' }}>📄</span>
                      <div>
                        <div style={{ fontSize: '0.875rem', color: '#1a1a1a', fontWeight: '500' }}>
                          {resource.name}
                        </div>
                        <div style={{ fontSize: '0.75rem', color: '#999' }}>
                          {resource.size}
                        </div>
                      </div>
                    </div>
                    <span style={{ color: '#0066cc', fontSize: '1rem' }}>↓</span>
                  </a>
                ))}
              </div>
            </div>

            {/* Instructor Card */}
            <div style={{
              background: 'white',
              borderRadius: '8px',
              padding: '24px',
              boxShadow: '0 1px 3px rgba(0,0,0,0.08)',
              border: '1px solid #e1e8ed'
            }}>
              <h3 style={{
                margin: '0 0 16px 0',
                fontSize: '1.125rem',
                fontWeight: '600',
                color: '#1a1a1a'
              }}>
                Instructor
              </h3>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
                <div style={{
                  width: '48px',
                  height: '48px',
                  background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'white',
                  fontWeight: '600',
                  fontSize: '1.125rem'
                }}>
                  JD
                </div>
                <div>
                  <div style={{ fontWeight: '600', color: '#1a1a1a', fontSize: '0.9375rem' }}>
                    John Doe
                  </div>
                  <div style={{ fontSize: '0.8125rem', color: '#666' }}>
                    Senior Developer
                  </div>
                </div>
              </div>
              <p style={{
                margin: '0 0 16px 0',
                fontSize: '0.875rem',
                lineHeight: '1.5',
                color: '#4a4a4a'
              }}>
                10+ years of experience in web development and teaching.
              </p>
              <button style={{
                width: '100%',
                padding: '8px',
                background: 'white',
                color: '#0066cc',
                border: '1px solid #0066cc',
                borderRadius: '6px',
                fontSize: '0.875rem',
                fontWeight: '600',
                cursor: 'pointer',
                transition: 'all 0.2s'
              }}
              onMouseEnter={(e) => {
                e.target.style.background = '#0066cc';
                e.target.style.color = 'white';
              }}
              onMouseLeave={(e) => {
                e.target.style.background = 'white';
                e.target.style.color = '#0066cc';
              }}
              >
                Contact Instructor
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ModuleDetail;
