import React from 'react'

const Project = () => {
  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-semibold">Project Management</h1>
          <p className="text-gray-500 mt-1">
            View and manage all projects in the system.
          </p>
        </div>

        <button className="inline-flex items-center px-4 py-2 rounded-md bg-blue-600 text-white font-medium hover:bg-blue-700 transition">
          <Plus className="h-4 w-4 mr-2" />
          Create Project
        </button>
      </div>

      {/* Filters */}
      <div className="bg-white border rounded-lg p-4">
        <div className="flex flex-col sm:flex-row gap-4">
          {/* Search */}
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search projects..."
              className="w-full pl-10 pr-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Show Archived */}
          <label className="flex items-center gap-2 text-sm cursor-pointer">
            <input type="checkbox" className="rounded border-gray-300" />
            <span className="text-gray-600">Show Archived</span>
          </label>
        </div>
      </div>

      {/* Projects List */}
      <div className="grid gap-4">
        {/* Project Card */}
        <div className="bg-white border rounded-lg p-5">
          <div className="flex flex-col sm:flex-row sm:justify-between gap-4">
            <div className="flex-1">
              <div className="flex items-center gap-2">
                <h3 className="text-lg font-medium">Website Redesign</h3>
              </div>

              <p className="text-gray-600 mt-2">
                Redesign the company website with a modern UI and better UX.
              </p>

              <p className="text-xs text-gray-400 mt-3">
                Created: 12/08/2025
              </p>
            </div>

            {/* Actions */}
            <div className="flex items-center gap-2">
              <button
                className="p-2 rounded-md hover:bg-gray-100 transition"
                title="Edit project"
              >
                <Pencil className="h-4 w-4 text-gray-500" />
              </button>

              <button
                className="p-2 rounded-md hover:bg-red-100 transition"
                title="Delete project"
              >
                <Trash2 className="h-4 w-4 text-red-600" />
              </button>
            </div>
          </div>
        </div>

        {/* Archived Project */}
        <div className="bg-white border rounded-lg p-5 opacity-60">
          <div className="flex flex-col sm:flex-row sm:justify-between gap-4">
            <div className="flex-1">
              <div className="flex items-center gap-2">
                <h3 className="text-lg font-medium line-through">
                  Old Mobile App
                </h3>
                <span className="px-2 py-0.5 rounded text-xs bg-gray-200 text-gray-600">
                  Archived
                </span>
              </div>

              <p className="text-gray-600 mt-2">
                Legacy mobile application project.
              </p>

              <p className="text-xs text-gray-400 mt-3">
                Created: 05/03/2024
              </p>
            </div>

            <div className="flex items-center gap-2">
              <button className="inline-flex items-center px-3 py-1.5 rounded-md border text-sm hover:bg-gray-100 transition">
                <RotateCcw className="h-4 w-4 mr-1" />
                Restore
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Empty State */}
      <div className="bg-white border rounded-lg py-12 flex flex-col items-center text-gray-500">
        <FolderKanban className="h-12 w-12 mb-4 opacity-50" />
        <p>No projects found.</p>
        <button className="mt-4 px-4 py-2 rounded-md border hover:bg-gray-100 transition">
          Create your first project
        </button>
      </div>

      {/* Pagination (UI only) */}
      <div className="flex justify-center gap-2 mt-6">
        <button className="px-3 py-1 border rounded hover:bg-gray-100">
          Prev
        </button>
        <button className="px-3 py-1 border rounded bg-blue-600 text-white">
          1
        </button>
        <button className="px-3 py-1 border rounded hover:bg-gray-100">
          2
        </button>
        <button className="px-3 py-1 border rounded hover:bg-gray-100">
          Next
        </button>
      </div>

      {/* Create / Edit Modal (UI only) */}
      <ModalUI title="Create New Project">
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">
              Project Name
            </label>
            <input
              type="text"
              placeholder="Enter project name"
              className="w-full border rounded-md px-3 py-2 focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">
              Description
            </label>
            <textarea
              placeholder="Describe the project..."
              rows={4}
              className="w-full border rounded-md px-3 py-2 focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="flex justify-end gap-3">
            <button className="px-4 py-2 border rounded-md hover:bg-gray-100">
              Cancel
            </button>
            <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
              Save
            </button>
          </div>
        </form>
      </ModalUI>
    </div>
  )
}

export default Project