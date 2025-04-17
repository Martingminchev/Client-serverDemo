//uncomment if you need to use the database
	 const Test = require('../models/models.js')

	const getTest = async (req,res) => {
		const todos=['Go to shop','Buy eggs','Walk my dog']
	    try{
	    	res.send({ok:true,message:todos})
	    }catch( error ){
	    	res.send({ok:false,message:error})
	    }
	}

	const postTest = async (req,res) => {
	    try{
	        res.send({ok:true,message:'coming from postTest'})
	    }catch( error ){
	    	res.send({ok:false,message:error})
	    }
	}

	module.exports = { 
		getTest,
		postTest
	}