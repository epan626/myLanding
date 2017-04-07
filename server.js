var express  = require( 'express' ),
		bp       = require( 'body-parser'),
		path     = require( 'path' ),
		root     = __dirname,
		port     = process.env.PORT || 8000,
		app      = express();


app.use( express.static( path.join( root, 'client' )));
app.use( express.static( path.join( root, 'client/static/views' )));
app.use( express.static( path.join( root, 'client/static/views/partials' )));
app.use( express.static( path.join( root, 'client/static/js' )));
app.use( express.static( path.join( root, 'client/static/css' )));
app.use( express.static( path.join( root, 'client/static/fonts' )));
app.use( express.static( path.join( root, 'client/static/images' )));
app.use( express.static( path.join( root, 'bower_components' )));
app.use( bp.json() );


var routes_setter = require('./server/config/routes.js')
routes_setter(app);

app.listen( port, function() {
	console.log( `server running on port ${ port }`);
})
