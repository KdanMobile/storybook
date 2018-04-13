module.exports = {
  	module: {
	    rules: [
	    	{
	    		test: /\.(png|j|jpeg|jpg|gif|svg|woff|woff2|ttf|otf|mp4|rar|zip)$/,
	    	  	use: {
		    	    loader: 'url-loader',
		    	    options: {
		    	      limit: 10000
		    	    }
		    	}
	    	},
	      	{
		        test: /\.css$/,
		        use: [
		          { loader: 'style-loader' },
		          {
		            loader: 'css-loader',
		            options: {
		              modules: true,
		              importLoaders: 1,
		              localIdentName: '[local][hash:base64:5]'
		            },
		          },
		          { loader: "sass-loader" }
		        ],
		    },
	    ],
	},
}
