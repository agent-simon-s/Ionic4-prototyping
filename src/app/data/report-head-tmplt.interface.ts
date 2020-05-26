export const ReportHeadTemplate = `
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<style>
* { border none; outline: none; border-color: transparent; background-color: transparent;  }
body { width:204mm; height:270mm; margin: 0; font-size: 12pt; line-height: 1.22em; font-family: "Roboto", "Helvetica Neue", sans-serif
}
div.relative {position: relative; width: 100%;
}
div.container{position: relative; display: block; float: none; clear: both; width: auto; padding: 0.5rem 1.25rem 0.66rem; 
} 
div.scoring-hero { display: inline-block; width: 94mm; height: 15.5rem; padding: 0rem 0.5rem 0 0;
} 
h4, h3 {margin: 0.1rem 0rem 0.2rem 0rem;
}
p { margin: 0.1rem 0rem 0.5rem 0rem; }
h3 {font-size: 1.5rem; font-weight: bold;
}
h4 {font-size: 1rem; font-weight: bold;
}
div.score-box {
	display: inline-block; float:left;
	width:96mm; height:6.66rem;
	margin: 0; padding: 0;
	}
div.score-box div.title{
	display: inline-block; float:left;
	width:59mm; height:4rem;
	padding: 0.5em 0; text-align: center;
	font-size: 1.5rem; line-height:4rem; 
	color:rgb(198, 188, 137);
	}
div.score-box div.score{
	display: inline-block; float:left;
	width:4rem; height:4rem;
	padding: 0.5em; border-radius: 50%;
	background-color: rgb(198, 188, 137); color:#000000;
	font-size: 1.75rem; line-height: 4rem;
	text-align: center; font-weight: bold;
	}
div.score-box.ess-style div.title h3{ color: rgb(142, 186, 229);
}
div.score-box.sns-style div.title h3{ color: rgb(198, 188, 137);
}
div.score-box.ess-style div.score{ background-color: rgb(142, 186, 229);
}
div.score-box.sns-style div.score{ background-color: rgb(198, 188, 137);
}
div.scale-chart { display: inline-block; float:left; width:93mm; height:11rem;
}
div.scale-chart div.slider { width:93mm; height:2.05rem padding: 1rem 1rem 0 1rem;
}
div.slider .range-slider { border none !important; outline: none !important; border-color: transparent; background-color: transparent; width:90mm; -webkit-appearance: none; appearance: none; }
div.slider .range-slider::-webkit-slider-thumb { border none !important; outline: none !important; border-color: transparent; background-color: transparent; width: 1.4rem; height:2.5rem; -webkit-appearance: none; appearance: none; background: url('red_scalePin.svg'); -webkit-background-size: contain; background-repeat: no-repeat; 
background-size: contain;
}
div.scale-chart img.graph{ width:93mm; height:auto;
}
div.bar { display: block;
	width:90%; padding: 0 1.4rem;
	background-color: #B7312C; color:#FFFFFF;
	font-size: 1rem; line-height: 2rem;
	}
div.bar img { margin-left: 1.3rem;	vertical-align: middle; 
}
div.referances { display: block;
	width:180mm; height:auto; margin:0.75rem 0rem 0rem;
	background-color: #FFFFFF; color:#000000;
	font-size: 0.8rem;line-height: 0.9rem;
	}
div.referances ol { padding: 0 0 0 1.1rem; 
}
div.referances ol li { padding: 0 0 0.25rem 0; 
}
p.signoff{font-size: 0.9rem;line-height: 0.9rem; margin: 0; padding: 0;
}
</style>
</head>
<body>
<div class="container">  <p>Below are the results from the questionnaire(s) in the Narcolepsy Screener.</p>  </div>
`