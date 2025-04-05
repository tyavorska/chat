import Conversations from './conversations/Conversations';
// import LogoutButton from '../../features/acount-managment/loguot/Logout';
import SearchInput from './search/SearchInput';
import AccountManagmentButton from '../../features/acount-managment/AccountManagment';

const Sidebar = () => {
  return (
    <div className="border-r border-slate-500 p-4 flex flex-col side-bar-chat">
      {/* <LogoutButton /> */}
      <AccountManagmentButton />
      <SearchInput />
      <div className="divider px-3"></div>
      <Conversations />
    </div>
  );
};
export default Sidebar;
