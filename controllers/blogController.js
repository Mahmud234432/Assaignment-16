// blogController.js
const blogController = {
    createBlog: (req, res) => {
      res.status(201).json({ message: 'Blog created successfully' });
    },
  
    readBlog: (req, res) => {
      res.status(200).json({ message: 'Blog read successfully' });
    },
  
    updateBlog: (req, res) => {
      res.status(200).json({ message: 'Blog updated successfully' });
    },
  
    deleteBlog: (req, res) => {
      res.status(200).json({ message: 'Blog deleted successfully' });
    }
  };
  
  module.exports = blogController;
  