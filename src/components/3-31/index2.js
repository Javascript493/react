export default function Demo({ stories }) {
  const _stories = stories.slice()
  _stories.push({
    id: 'create',
    label: 'Create Story'
  });

  return (
    <ul>
      {_stories.map(story => (
        <li key={story.id}>
          {story.label}
        </li>
      ))}
    </ul>
  );
}
