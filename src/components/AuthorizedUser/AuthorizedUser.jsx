import { useDispatch, useSelector } from 'react-redux';
import { AuthorizedUresContainer} from './AuthorizedUser.styles';
import { logOutUser } from 'store/operations';


function AuthorizedUser() {
  const userName = useSelector(state => state.auth.user.name);
  const dispatch = useDispatch();

  const onLogOutBtnClick = () => {
    dispatch(logOutUser());
  };

  return (
    <AuthorizedUresContainer>
      <p>Hi,</p>
      <p>{userName}</p>
      <button type="button" onClick={onLogOutBtnClick}>
        Log out
      </button>
    </AuthorizedUresContainer>
  );
}

export default AuthorizedUser;