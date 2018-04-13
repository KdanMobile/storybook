import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import { withKnobs, text, object } from '@storybook/addon-knobs/react';


import './font.css'
import styles from './style.css'
import MainBtn from '../src/universal/components/MainBtn';


const stories = storiesOf('Buttons', module)
stories.addDecorator(withKnobs)

// stories.add('inline css Demo', () => {
// 	const btnText = text('content', 'i m demo')

// 	const customcss = {
// 	  backgroundColor: 'red',
// 	  position: 'relative',
// 	  display: 'inline-block',
// 	  padding: '15px 20px',
// 	  fontSize: '16px',
// 	  textAlign: 'center',
// 	  backgroundColor: '#fc494c',
// 	  border: '1px solid #fc494c',
// 	  color: 'white',
// 	  cursor: 'pointer',
// 	  transition: 'all .3s',
// 	}
// 	const btnStyle = object('style', customcss)

// 	return <div style={btnStyle}>{ btnText }</div>
// })

stories.add('Primary', () => {
	return (
		<div className={styles.wrapper}>

			<h2>Primary Buttons</h2>

			<div className={styles.description}>
				<div>. 按鈕文案字母開頭大寫，不可全部大寫</div>
				<div>. 請勿在不同頁面上出現意思相同的語彙卻文案不一樣的狀況</div>
				<div>. 浮動按鈕位置請固定於畫面右下角</div>
				<div>. 分類規範<br/>
					<table>
						<tbody>
							<tr><td><b>Large</b></td><td>按鈕在單獨頁面空白或寬度佔總頁面寬度1/2且字元數於10-16內</td></tr>
							<tr><td><b>Medium</b></td><td>字元數高於10以上、有圖示</td></tr>
							<tr><td><b>Small</b></td><td>頁面一般情況下且未超出9個字元</td></tr>
						</tbody>	
					</table>
				</div>		
			</div>
			<hr/>

			<div className={styles.content}>
				<div>
					<span>Large</span>
					<MainBtn text={text('btn-large', 'large', 'GROUP-BTN')} />
				</div>

				<div>
					<span>Medium</span>
					<MainBtn text={text('btn-medium', 'medium', 'GROUP-BTN')} isMedium={true} />
				</div>

				<div>
					<span>Small</span>
					<MainBtn text={text('btn-small', 'small', 'GROUP-BTN')} isSmall={true} />
				</div>

				<div>
					<span>Reverse</span>
					<MainBtn text={text('btn-reverse', 'reverse', 'GROUP-BTN')} isReverse={true} />
				</div>

				<div>
					<span>Disabled</span>
					<MainBtn text={text('btn-disabled', 'disabled', 'GROUP-BTN')} isDisabled={true} />
				</div>

				<div>
					<span>With Icon</span>
					<MainBtn text={text('btn-icon', 'icon', 'GROUP-BTN')} icon={'https://www.kdanmobile.com/static/6effa33875aa96d45783d6bcaa5e4415.gif'} />
				</div>	
			</div>	
		</div>
	)	
	
})


