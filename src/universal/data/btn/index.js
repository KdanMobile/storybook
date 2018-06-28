export default {

	strings: {
		text: [
			{
				lang: 'text-en',
				text: 'Submit',
				group: 'GROUP-BTN'
			},
			{
				lang: 'text-tw',
				text: '送出',
				group: 'GROUP-BTN'
			},
			{
				lang: 'text-cn',
				text: '提交',
				group: 'GROUP-BTN'
			},
			{
				lang: 'text-jp',
				text: '提出',
				group: 'GROUP-BTN'
			},
		],
	},

	btns: [
		{
			title: 'Normal',
			property: {},
			style: 'position: relative;<br/>display: inline-flex;<br/>flex-direction: row;<br/>align-items: center;<br/>justify-content: center;<br/>flex-wrap: nowrap;<br/>cursor: pointer;<br/>transition: all .3s;<br/><br/>width: 400px;<br/>height: 70px;<br/>padding: 0 35px;<br/>border-radius: 35px;<br/>margin: 35px;<br/>font-size: 36px;<br/><br/>background-color: #00a89b;<br/>border: 2px solid #00a89b;<br/>color: white;'
		},
		{
			title: 'Medium',
			property: {
				isMedium: true
			},
			style: 'width: 230px;<br/>height: 50px;<br/>padding: 0 25px;<br/>border-radius: 25px;<br/>margin: 25px;<br/>font-size: 22px;',
		},
		{
			title: 'Medium with Icon',
			property: {
				isMedium: true,
				icon: 'https://www.kdanmobile.com/static/6effa33875aa96d45783d6bcaa5e4415.gif'
			},
			style: 'imgWrapper { padding: 5px; height: 100%; }',
		},
		{
			title: 'Small',
			property: {
				isSmall: true
			},
			style: 'width: 124px;<br/>height: 40px;<br/>padding: 0 20px;<br/>border-radius: 20px;<br/>margin: 20px;<br/>font-size: 18px',
		},
		{
			title: 'Reverse',
			property: {
				isReverse: true
			},
			style: 'background-color: rgba(0,0,0,0);<br/>border: 2px solid #00a89b;<br/>color: #00a89b;'
		},
		{
			title: 'Disabled',
			property: {
				isDisabled: true
			},
			style: 'border: none;',
		},
	]	
}