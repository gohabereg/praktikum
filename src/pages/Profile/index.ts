import { ProfilePage } from './profile';
import { withStore } from '../../utils/Store';

export const withUser = withStore((state) => ({...state.currentUser}));

export default withUser(ProfilePage)