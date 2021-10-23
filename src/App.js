import './App.css';
import { Admin, Resource } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';
import authProvider from "./authProvider";

import { Dashboard } from "./components/Dashboard";

import PostIcon from '@material-ui/icons/Book';
import UserIcon from '@material-ui/icons/Group';

const dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com');

const App = () => (
    <Admin dashboard={Dashboard} authProvider={authProvider} dataProvider={dataProvider}>
            <Resource name="Planning" list={ Dashboard }  icon={PostIcon} />
            <Resource name="Analytics" list={ Dashboard } icon={UserIcon} />
    </Admin>
);

export default App;
