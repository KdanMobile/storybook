export default {

	strings: {
		title: [
			{
				lang: 'title-en',
				text: 'alohaa',
				group: 'GROUP-TYPOGRAPHY'
			},
			{
				lang: 'title-tw',
				text: '妳好啊',
				group: 'GROUP-TYPOGRAPHY'
			},
			{
				lang: 'title-cn',
				text: '阿啰哈',
				group: 'GROUP-TYPOGRAPHY'
			},
			{
				lang: 'title-jp',
				text: 'こんにちは',
				group: 'GROUP-TYPOGRAPHY'
			},
		],
		sub: [
			{
				lang: 'sub-en',
				text: 'Im sub title',
				group: 'GROUP-TYPOGRAPHY'
			},
			{
				lang: 'sub-tw',
				text: '我是副標題',
				group: 'GROUP-TYPOGRAPHY'
			},
			{
				lang: 'sub-cn',
				text: '我是副标题',
				group: 'GROUP-TYPOGRAPHY'
			},
			{
				lang: 'sub-jp',
				text: '俺サブタイトル',
				group: 'GROUP-TYPOGRAPHY'
			},
		]
	},	

	fonts: [
		{
			main: {
				title: 'h1 大型標題',
				tag: 'h1',
				style: 'font-size: 48px;<br/>line-height: 1.2;<br/>margin-bottom: 30px;',
			},
			sub: {
				title: 'b1 內文',
				tag: 'b1',
				style: 'font-weight: normal;<br/>font-size: 22px;<br/>line-height: 1.5;',
			},
		},
		{
			main: {
				title: 'h2 一般標題',
				tag: 'h2',
				style: 'font-size: 36px;<br/>line-height: 1.15;<br/>margin-bottom: 30px;',
			},
			sub: {
				title: 'b2 內文',
				tag: 'b2',
				style: 'font-weight: lighter;<br/>font-size: 20px;<br/>line-height: 1.5;',
			}	
		},
		{
			main: {
				title: 'h3 icon圖示標題',
				tag: 'h3',
				style: 'font-size: 26px;<br/>line-height: 1.15;<br/>margin-bottom: 20px;',
			},
			sub: {
				title: 'b5 內文',
				tag: 'b5',
				style: 'font-weight: lighter;<br/>font-size: 20px;<br/>line-height: 1.5;',
			}
		},
		{
			main: {
				title: 'h4 icon圖示標題',
				tag: 'h4',
				style: 'font-size: 14px;<br/>line-height: 1.15;<br/>margin-bottom: 10px;',
			},
			sub: {
				title: 'b5 內文',
				tag: 'b5',
				style: 'font-weight: lighter;<br/>font-size: 20px;<br/>line-height: 1.5;',
			}
		},
		{
			main: {
				title: 'b4 User Story',
				tag: 'b4',
				style: 'font-weight: lighter;<br/>font-size: 22px;<br/>line-height: 1;<br/>font-style: italic;',
			},
			sub: {
				title: 'b2 內文',
				tag: 'b2',
				style: 'font-weight: lighter;<br/>font-size: 20px;<br/>line-height: 1.5;',
			}
		}
	]
}