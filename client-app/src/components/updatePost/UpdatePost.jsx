import  { useContext, useEffect } from 'react';
import { useForm } from '../../hooks/useForm';
import { useParams } from 'react-router-dom';

import styles from './UpdatePost.module.css';

import { editService, getOneService } from '../../services/postsServices';
import AuthContext from '../../contexts/authContext';
import { useNavigation } from '../../contexts/navigationContext';


const initialValues = {
  title: '',
  body: '',
}

function UpdatePost() {
  const { accessToken, userId } = useContext(AuthContext)
  const { postId } = useParams()
  const navigate = useNavigation();
  const { values, onChange, onSubmit } = useForm({ submitHandler: editService, initialValues, accessToken, navigate, postId });


  useEffect(() => {
    getOneService(postId).then(postData => {
      if (postData._ownerId !== userId) {
        alert('Post with this id does not exist!');
        navigate('/home')
      }
      onChange({ target: { name: 'title', value: postData.title } })
      onChange({ target: { name: 'body', value: postData.body } })
    }).catch(err => { console.error(err) })
  }, [postId])

  return (
    <div className={styles.container}>
      <form id={styles.contact} action="" method="post" onSubmit={onSubmit}>
        <h3 className={styles.h3}>Edit post</h3>
        <h4 className={styles.h4}>Enter new post details!</h4>

        <fieldset className={styles.fieldset}>
          <input
            placeholder="Title"
            type="text"
            tabIndex={2}
            required
            name='title'
            className={styles.input}
            onChange={onChange}
            value={values.title}
          />
        </fieldset>

        <fieldset className={styles.fieldset}>
          <input
            placeholder="Body"
            type="text"
            tabIndex={1}
            required
            autoFocus
            name='body'
            className={styles.input}
            onChange={onChange}
            value={values.body}
          />
        </fieldset>

        <fieldset>
          <button
            name="submit"
            type="submit"
            id="contact-submit"
            data-submit="...Sending"
          >
            Submit
          </button>
        </fieldset>

      </form>
    </div>
  );
}

export default UpdatePost;