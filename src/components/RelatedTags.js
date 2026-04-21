export default function RelatedTags({ tags }) {
  if (!tags || tags.length === 0) {
    return null;
  }

  return (
    <div className="blog__tags--media d-flex align-items-center">
      <label className="blog__tags--media__title">Related Tags :</label>
      <ul className="d-flex flex-wrap gap-2">
        {tags.map((tag, index) => (
          <li key={index} className="blog__tags--media__list">
            <a 
              className="blog__tags--media__link d-inline-block px-3 py-1 rounded text-decoration-none no-hover" 
              href={`/blog?tag=${encodeURIComponent(tag)}`}
              style={{
                fontSize: '14px',
                lineHeight: '1.4',
                backgroundColor: '#f8f9fa',
                color: '#495057',
                border: '1px solid #dee2e6',
                transition: 'none',
                cursor: 'default'
              }}

            >
              {tag}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
