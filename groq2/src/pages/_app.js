import AppWrapper from '../components/AppWrapper';

function MyApp({ Component, pageProps }) {
return (
<AppWrapper>
<Component {...pageProps} />
</AppWrapper>
);
}

export default MyApp;
// FILE: src/pages/index.js
import React from 'react';
import AppWrapper from '../components/AppWrapper';

const IndexPage = () => {
return (
<AppWrapper>
<h1>Welcome to the task manager!</h1>
</AppWrapper>
);
};

export default IndexPage;