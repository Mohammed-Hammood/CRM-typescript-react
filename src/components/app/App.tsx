import React from 'react';
import {SideBar} from 'components';
import Header from 'components/layouts/header';
import Pages from 'pages';

const App: React.FC = (): JSX.Element => {

    return (
        <div className='app'>
            <Header />
            <div className="content_wrapper">
                <SideBar />
                <main>
                    <Pages />
                </main>
            </div>
        </div>
    );
}

export default App;
