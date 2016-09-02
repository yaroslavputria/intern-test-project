'use strict';

var chai = require('chai'),
	should = chai.should,
	expect = chai.expect,
	requirejs = require('requirejs'),
	fetch = require('isomorphic-fetch');


describe("model", function() {

	var gists = [
	    {
	        "files": {
	            "ind-data.json": {
	                "filename": "ind-data.json",
	                "type": "application/json",
	                "language": "JSON",
	                "raw_url": "https://gist.githubusercontent.com/my8bit/17e385f08c1d9adf905cf49b1ce79484/raw/fe04d3cb05fd205cdd261ebc768083252d508c99/ind-data.json",
	                "size": 214744
	            }
	        }
	    },
	    {        
	        "files": {
	            "example.json": {
	                "filename": "example.json",
	                "type": "application/json",
	                "language": "JSON",
	                "raw_url": "https://gist.githubusercontent.com/my8bit/df3cccccebc66501f6f9/raw/452614d16b8bd84d8ad198913254d51e36a86fae/example.json",
	                "size": 64197
	            }
	        }
	    },
	    {
	        "files": {
	            "bundle.js": {
	                "filename": "bundle.js",
	                "type": "application/javascript",
	                "language": "JavaScript",
	                "raw_url": "https://gist.githubusercontent.com/my8bit/5b87c550ebbc36da202e/raw/109f6b34b576e8dcbc691942467f0dcd278ccf60/bundle.js",
	                "size": 439450
	            }
	        }
	    },
	    {
	        "files": {
	            "gistfile1.txt": {
	                "filename": "gistfile1.txt",
	                "type": "text/plain",
	                "language": "Text",
	                "raw_url": "https://gist.githubusercontent.com/my8bit/f2429f969f0b82120d07/raw/94e16eb764defbb8d626116679bed66a9003cac7/gistfile1.txt",
	                "size": 1872
	            }
	        }
	    },
	    {
	        "files": {
	            "most-common-word-in-text.js": {
	                "filename": "most-common-word-in-text.js",
	                "type": "application/javascript",
	                "language": "JavaScript",
	                "raw_url": "https://gist.githubusercontent.com/my8bit/02e66debfa71729eeb60/raw/a7eede1caee30925e2b83484e8aa56840b719205/most-common-word-in-text.js",
	                "size": 1071
	            }
	        }
	    },
	    {
	        "files": {
	            "CV - Ihor Pavlenko - JavaScript developer.md": {
	                "filename": "CV - Ihor Pavlenko - JavaScript developer.md",
	                "type": "text/plain",
	                "language": "Markdown",
	                "raw_url": "https://gist.githubusercontent.com/my8bit/d0a7ca21c0492efd8680/raw/0d0f8205ebe528f20c9fb257fd438335e66f1a1c/CV%20-%20Ihor%20Pavlenko%20-%20JavaScript%20developer.md",
	                "size": 3104
	            }
	        }
	    },
	    {
	        "files": {
	            "Ялюблютебя.txt": {
	                "filename": "Ялюблютебя.txt",
	                "type": "text/plain",
	                "language": "Text",
	                "raw_url": "https://gist.githubusercontent.com/my8bit/01e590481c50bbc3f9f5/raw/f241b7b83cc9739ac4550185a56a2cd9e4d272c8/%D0%AF%D0%BB%D1%8E%D0%B1%D0%BB%D1%8E%D1%82%D0%B5%D0%B1%D1%8F.txt",
	                "size": 1192
	            }
	        }
	    },
	    {
	        "files": {
	            "инерция.txt": {
	                "filename": "инерция.txt",
	                "type": "text/plain",
	                "language": "Text",
	                "raw_url": "https://gist.githubusercontent.com/my8bit/10535943/raw/02573fcd8561b07011aef1d72f9abb84c53eac5a/%D0%B8%D0%BD%D0%B5%D1%80%D1%86%D0%B8%D1%8F.txt",
	                "size": 712
	            }
	        }
	    },
	    {
	        "files": {
	            "Молодость жива.md": {
	                "filename": "Молодость жива.md",
	                "type": "text/plain",
	                "language": "Markdown",
	                "raw_url": "https://gist.githubusercontent.com/my8bit/10308087/raw/13bffe9b7a2b9c3e95f9a8fe3362fb6719e3cfd4/%D0%9C%D0%BE%D0%BB%D0%BE%D0%B4%D0%BE%D1%81%D1%82%D1%8C%20%D0%B6%D0%B8%D0%B2%D0%B0.md",
	                "size": 1881
	            }
	        }
	    },
	    {
	        "files": {
	            "Пиип на Лиип - Иду читаю.txt": {
	                "filename": "Пиип на Лиип - Иду читаю.txt",
	                "type": "text/plain",
	                "language": "Text",
	                "raw_url": "https://gist.githubusercontent.com/my8bit/8756639/raw/a0e75edd9de0e2747a812409d7773054a6c2f701/%D0%9F%D0%B8%D0%B8%D0%BF%20%D0%BD%D0%B0%20%D0%9B%D0%B8%D0%B8%D0%BF%20-%20%D0%98%D0%B4%D1%83%20%D1%87%D0%B8%D1%82%D0%B0%D1%8E.txt",
	                "size": 2478
	            }
	        }
	    },
	    {
	        "files": {
	            "stream.py": {
	                "filename": "stream.py",
	                "type": "application/x-python",
	                "language": "Python",
	                "raw_url": "https://gist.githubusercontent.com/my8bit/8543754/raw/b0161776e258b8f0cf1187599a083ef0fd062933/stream.py",
	                "size": 2279
	            }
	        }
	    },
	    {
	        "files": {
	            "poststyle.css": {
	                "filename": "poststyle.css",
	                "type": "text/css",
	                "language": "CSS",
	                "raw_url": "https://gist.githubusercontent.com/my8bit/8479597/raw/4717ad4b94f6dfedd27029b8432f7e5a458597a8/poststyle.css",
	                "size": 22
	            }
	        }
	    },
	    {
	        "files": {
	            "example.haml": {
	                "filename": "example.haml",
	                "type": "text/plain",
	                "language": "Haml",
	                "raw_url": "https://gist.githubusercontent.com/my8bit/8479549/raw/0a6760202972220b273688c41d25beca858364cd/example.haml",
	                "size": 534
	            }
	        }
	    },
	    {
	        "files": {
	            "poem.md": {
	                "filename": "poem.md",
	                "type": "text/plain",
	                "language": "Markdown",
	                "raw_url": "https://gist.githubusercontent.com/my8bit/8433110/raw/c2175f65dd09e33f112abc28c5bca025e66067da/poem.md",
	                "size": 1290
	            }
	        }
	    },
	    {
	        "files": {
	            "scriptExec.md": {
	                "filename": "scriptExec.md",
	                "type": "text/plain",
	                "language": "Markdown",
	                "raw_url": "https://gist.githubusercontent.com/my8bit/7548340/raw/6df671975d580f90a2dbcb792d7fc5208479761c/scriptExec.md",
	                "size": 229
	            }
	        }
	    },
	    {
	        "files": {
	            "My sample post on gist.io.md": {
	                "filename": "My sample post on gist.io.md",
	                "type": "text/plain",
	                "language": "Markdown",
	                "raw_url": "https://gist.githubusercontent.com/my8bit/7361666/raw/bbb61adccd83e5b69a0fd6906b276a4d0d990a6e/My%20sample%20post%20on%20gist.io.md",
	                "size": 166
	            }
	        }
	    },
	    {
	        "files": {
	            "Get only text nodes": {
	                "filename": "Get only text nodes",
	                "type": "text/plain",
	                "language": null,
	                "raw_url": "https://gist.githubusercontent.com/my8bit/7143332/raw/851241793a7917d86d4e479b0eebda821b12ad90/Get%20only%20text%20nodes",
	                "size": 959
	            }
	        }
	    },
	    {
	       "files": {
	            "ResizeGrid": {
	                "filename": "ResizeGrid",
	                "type": "text/plain",
	                "language": null,
	                "raw_url": "https://gist.githubusercontent.com/my8bit/7101019/raw/c887d241ccca25f421c4e0a7e1bdbeb8ed335926/ResizeGrid",
	                "size": 348
	            }
	        }
	    },
	    {
	       "files": {
	            "gTune.js": {
	                "filename": "gTune.js",
	                "type": "application/javascript",
	                "language": "JavaScript",
	                "raw_url": "https://gist.githubusercontent.com/my8bit/4045457/raw/9a1d9c08a8f427c6670f8a5f4dd5de18fb6f9990/gTune.js",
	                "size": 396
	            }
	        }
	    },
	    {
	        "files": {
	            "hipchat_bot.js": {
	                "filename": "hipchat_bot.js",
	                "type": "",
	                "language": "",
	                "raw_url": "https://gist.githubusercontent.com/my8bit/3823780/raw/413b5601292df26e06f325cbd6e3944a728fb590/hipchat_bot.js",
	                "size": 2674
	            }
	        }
	    },
	    {
	        "files": {
	            "CSS part": {
	                "filename": "CSS part",
	                "type": "text/plain",
	                "language": null,
	                "raw_url": "https://gist.githubusercontent.com/my8bit/3754824/raw/0a935c35ab484c170fe73487d23acddf8cd73328/CSS%20part",
	                "size": 173
	            },
	            "JS (JQuery) part": {
	                "filename": "JS (JQuery) part",
	                "type": "text/plain",
	                "language": null,
	                "raw_url": "https://gist.githubusercontent.com/my8bit/3754824/raw/5fc6b97aa4a067f9eb2b7c88d708db0ca4863169/JS%20(JQuery)%20part",
	                "size": 115
	            },
	            "html part": {
	                "filename": "html part",
	                "type": "text/plain",
	                "language": null,
	                "raw_url": "https://gist.githubusercontent.com/my8bit/3754824/raw/ef276e35edca3de75cad1eca4d73f3eab0a05ec8/html%20part",
	                "size": 25
	            }
	        }
	    }
	];
	var files = [
	    {
	        "filename": "ind-data.json",
	        "type": "application/json",
	        "language": "JSON",
	        "raw_url": "https://gist.githubusercontent.com/my8bit/17e385f08c1d9adf905cf49b1ce79484/raw/fe04d3cb05fd205cdd261ebc768083252d508c99/ind-data.json",
	        "size": 214744
	    },
	    {
	        "filename": "example.json",
	        "type": "application/json",
	        "language": "JSON",
	        "raw_url": "https://gist.githubusercontent.com/my8bit/df3cccccebc66501f6f9/raw/452614d16b8bd84d8ad198913254d51e36a86fae/example.json",
	        "size": 64197
	    }
	];

	var Model = requirejs("src/model/model.js");
	var model = new Model();


	it("length of array of all gist must be 21", function() {
		expect(gists).to.have.lengthOf(21);
	});

	it("number of files with type 'text/plain' must be 15", function() {
		expect(model.filterFiles(gists, "text/plain")).to.have.lengthOf(15);
	});

	it("number of files with type 'application/json' must be 2", function() {
		expect(model.filterFiles(gists, "application/json")).to.have.lengthOf(2);
	});

	it("number of all files must be 23", function() {
		expect(model.filterFiles(gists)).to.have.lengthOf(23);
	});

	it("must return empty array if there is no any file with type 'sass'", function() {
		expect(model.filterFiles(gists, "sass")).to.have.lengthOf(0);
	});

	it("must throw error if there is wrong input data", function() {
		expect(model.filterFiles).to.throw(Error);
	});
	
	it("filterByName must be a function", function() {
		expect(model.filterByName).to.be.a("function");
	});

	it("must return array with length 2", function() {
		expect(model.filterByName(files)).to.have.lengthOf(2);
	});

});
