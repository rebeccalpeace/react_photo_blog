const { useEffect } = require("react")

useDeletePost() {
  const [shouldRefetchBlogs, setShouldRefetchBlogs] = useState(false)
  const [errorDeletingBlog, setErrorDeletingBlog] = useState(false)
  const [updatedBlogs, setUpdatedBlogs] = useState(null)

  const deleteBlog = ({id}) => {
  // call endpoint to delete blog by ID
  //  if success:
      // setShouldRefetchBlogs(true)
  // if error:
      //  setErrorDeletingBlog(true)
  }

  useEffect(() => {
    if (shouldRefetchBlogs) {
      // call endpoint to refetch blogs
      //  if success:
        // setUpdatedBlogs(<return of api call>)
      //  if error: 
      // retry?
      setShouldRefetchBlogs(false)
    }
  }, [shouldRefetchBlogs])

  return {
    deleteBlog, //function,
    error: errorDeletingBlog, // boolean
    updatedBlogs // array of objects
  }
};

const {deleteBlog, error, updatedBlogs} = useDeletePost()

deleteBlog({id})

useEffect(() => {
  if (updatedBlogs) {
    setBlogs(updatedBlogs)
  }
}, [updatedBlogs])







// "https://i.ibb.co/Y0HPB0n/IMG-8058.jpg" 
// "https://i.ibb.co/s6qnqCK/IMG-8153.jpg" 
// "https://i.ibb.co/WB79Qm5/IMG-8278.jpg" 
// "https://i.ibb.co/sgvwmty/IMG-8633.jpg" 
// "https://i.ibb.co/ssfbm9b/IMG-8679.jpg" 