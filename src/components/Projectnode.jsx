// one thumbnail in the video selector
function ProjectNode({ project, isSelected, onSelect }) {
  return (
    <button
      className={isSelected ? 'project-node selected' : 'project-node'}
      onClick={onSelect}
      aria-label={project.title}
      style={project.thumbnail ? { backgroundImage: `url(${project.thumbnail})` } : undefined}
    >
      {project.keyword}
    </button>
  )
}

export default ProjectNode
