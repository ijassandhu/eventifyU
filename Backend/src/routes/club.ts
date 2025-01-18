import express  from "express"

const Router = express.Router();

Router.route('/').post().get().put();
Router.post('/admin');
