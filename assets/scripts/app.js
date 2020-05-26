const Portfolio = function() {
	function makeWords() {
		var words = [
			{
				text: "CSS3",
				weight: 12.3
			}, {
				text: "GitHub",
				weight: 8
			}, {
				text: "javascript",
				weight: 14
			}, {
				text: "English",
				weight: 3
			}, {
				text: "programming",
				weight: 7
			}, {
				text: "HTML5",
				weight: 10
			}, {
				text: "GitBash",
				weight: 9
			}, {
				text: "React",
				weight: 15
			}, {
				text: "Bootstrap4",
				weight: 7,
			}, {
				text: "Soft Skills",
				weight: "5"	
			}
		];
		return words;
	}

	function makeWordCloud(words) {
		$('.teaching-domains').jQCloud(words, {delay: 120});
	}

	function displayWordCloud() {
		var count = 1;
		$(window).on('scroll', function() {
			var y_scroll_pos = window.pageYOffset;
			var scroll_pos_test = 2700; // set to whatever you want it to be
			var words = makeWords();
			if (y_scroll_pos > scroll_pos_test && count <= 1) {
				makeWordCloud(words);
				count++;
			}
		});
	}

	function designForm() {
		$("#my-modal form").addClass("my-form");
	}

	function typeAnimation() {
		Typed.new("#writing-text", {
			strings: [
				"I am a Front-End Web Developer.", "Love everything about code", "Also teach programming to people", "And I solve problems."
			],
			// Optionally use an HTML element to grab strings from (must wrap each string in a <p>)
			stringsElement: null,
			// typing speed
			typeSpeed: 1,
			contentType: 'text',
			// callback: function() {
			// 	$("#writing-text").css({"color": "#fff","background-color":"rgb(196, 196, 196)","border-radius":"10px"});
			// },
			preStringTyped: function() {},
			onStringTyped: function() {}
		});
	}

	return {
		displayWordCloud: displayWordCloud,
		typeAnimation: typeAnimation
	}

}();


Portfolio.displayWordCloud();
Portfolio.typeAnimation();
