import React from 'react';
import ReactDOM from 'react-dom';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import { withKnobs, text } from '@storybook/addon-knobs/react';


import './font.css'
import styles from './style.css'


const stories = storiesOf('Basic', module)
stories.addDecorator(withKnobs)

stories.add('Typography', () => {
	
	return (
		<div className={styles.wrapper}>
			<h2>Typography</h2>

			<div className={styles.description}>
				<div>. 一般內文適合的字元長度在最短30最長60之間</div>	
				<div>. 短文章適合字元長度15-30之間</div>
				<div>. ClearSans, NotoSansTC, NotoSansSC, NotoSansJP</div>
			</div>
			<hr/>

			<div className={styles.content}>
				<div>
					<span>h1 大型標題</span>
					<h1 className={styles.en}>{text('en', 'alohaa', 'GROUP-TYPOGRAPHY')}</h1>
					<h1 className={styles.tw}>{text('tw', '妳好啊', 'GROUP-TYPOGRAPHY')}</h1>
					<h1 className={styles.cn}>{text('cn', '阿啰哈', 'GROUP-TYPOGRAPHY')}</h1>
					<h1 className={styles.jp}>{text('jp', 'こんにちは', 'GROUP-TYPOGRAPHY')}</h1>
				</div>

				<div>
					<span>h2 一般標題</span>
					<h2 className={styles.en}>{text('en', 'alohaa', 'GROUP-TYPOGRAPHY')}</h2>
					<h2 className={styles.tw}>{text('tw', '妳好啊', 'GROUP-TYPOGRAPHY')}</h2>
					<h2 className={styles.cn}>{text('cn', '阿啰哈', 'GROUP-TYPOGRAPHY')}</h2>
					<h2 className={styles.jp}>{text('jp', 'こんにちは', 'GROUP-TYPOGRAPHY')}</h2>
				</div>

				<div>
					<span>h3 icon圖示標題</span>
					<h3 className={styles.en}>{text('en', 'alohaa', 'GROUP-TYPOGRAPHY')}</h3>
					<h3 className={styles.tw}>{text('tw', '妳好啊', 'GROUP-TYPOGRAPHY')}</h3>
					<h3 className={styles.cn}>{text('cn', '阿啰哈', 'GROUP-TYPOGRAPHY')}</h3>
					<h3 className={styles.jp}>{text('jp', 'こんにちは', 'GROUP-TYPOGRAPHY')}</h3>
				</div>

				<div>
					<span>b1 內文</span>
					<b1 className={styles.en}>{text('en', 'alohaa', 'GROUP-TYPOGRAPHY')}</b1>
					<b1 className={styles.tw}>{text('tw', '妳好啊', 'GROUP-TYPOGRAPHY')}</b1>
					<b1 className={styles.cn}>{text('cn', '阿啰哈', 'GROUP-TYPOGRAPHY')}</b1>
					<b1 className={styles.jp}>{text('jp', 'こんにちは', 'GROUP-TYPOGRAPHY')}</b1>
				</div>

				<div>
					<span>b2 內文</span>
					<b2 className={styles.en}>{text('en', 'alohaa', 'GROUP-TYPOGRAPHY')}</b2>
					<b2 className={styles.tw}>{text('tw', '妳好啊', 'GROUP-TYPOGRAPHY')}</b2>
					<b2 className={styles.cn}>{text('cn', '阿啰哈', 'GROUP-TYPOGRAPHY')}</b2>
					<b2 className={styles.jp}>{text('jp', 'こんにちは', 'GROUP-TYPOGRAPHY')}</b2>
				</div>

				<div>
					<span>b3 問與答</span>
					<b3 className={styles.en}>{text('en', 'alohaa', 'GROUP-TYPOGRAPHY')}</b3>
					<b3 className={styles.tw}>{text('tw', '妳好啊', 'GROUP-TYPOGRAPHY')}</b3>
					<b3 className={styles.cn}>{text('cn', '阿啰哈', 'GROUP-TYPOGRAPHY')}</b3>
					<b3 className={styles.jp}>{text('jp', 'こんにちは', 'GROUP-TYPOGRAPHY')}</b3>
				</div>

				<div>
					<span>b4 User Story</span>
					<b4 className={styles.en}>{text('en', 'alohaa', 'GROUP-TYPOGRAPHY')}</b4>
					<b4 className={styles.tw}>{text('tw', '妳好啊', 'GROUP-TYPOGRAPHY')}</b4>
					<b4 className={styles.cn}>{text('cn', '阿啰哈', 'GROUP-TYPOGRAPHY')}</b4>
					<b4 className={styles.jp}>{text('jp', 'こんにちは', 'GROUP-TYPOGRAPHY')}</b4>
				</div>

				<div>
					<span>b5 內文</span>
					<b5 className={styles.en}>{text('en', 'alohaa', 'GROUP-TYPOGRAPHY')}</b5>
					<b5 className={styles.tw}>{text('tw', '妳好啊', 'GROUP-TYPOGRAPHY')}</b5>
					<b5 className={styles.cn}>{text('cn', '阿啰哈', 'GROUP-TYPOGRAPHY')}</b5>
					<b5 className={styles.jp}>{text('jp', 'こんにちは', 'GROUP-TYPOGRAPHY')}</b5>
				</div>

				<div>
					<span>tooltip 提示性文字</span>
					<p className={styles.tooltip}>{text('tooltip', 'alohaa', 'GROUP-TYPOGRAPHY')}</p>
				</div>

			</div>
		</div>	
	)	
})
