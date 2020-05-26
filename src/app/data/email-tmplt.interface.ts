export interface EmailTemplate {
  "personalizations": [
	    {
	      "to": [
	        {
	          "email": string
	        }
	      ],
	      "subject": string
	    }
	  ],
	  "from": {
	    "email": string
	  },
	  "content": [
	    {
	      "type": "text/plain",
	      "value": any
	    }
	  ]
	}