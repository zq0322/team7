import app from './app';
import router from './router'
import './common/css/index.css'
import 'antd/dist/antd.css'


// 2. Plugins
// app.use({});

// 3. Model
app.model(require('./models/example').default);


// 4. Router
app.router(router);

// 5. Start
app.start('#root');
