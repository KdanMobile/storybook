import React from 'react';
import ReactDOM from 'react-dom';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import { withKnobs, text } from '@storybook/addon-knobs/react';


import './font.css'
import styles from './style.css'
import data from '../src/universal/data/typography'


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
				{
					data.fonts.map((font, idx) =>
						<div key={idx} className={styles.card}>
							<div className={styles.title}>
								<h3>{ font.main.title }</h3>
								<b5>{ font.sub.title }</b5>
							</div>

							<div className={styles.style}>
								<div className={styles.blk} dangerouslySetInnerHTML={{ __html: `${font.main.style}` }} />
								<div className={styles.blk} dangerouslySetInnerHTML={{ __html: `${font.sub.style}` }} />
							</div>	
							
							<div className={styles.demo}>
								{
									data.strings.title.map((string, indx) => 
										<div key={indx} className={styles.dm}>
											<font.main.tag lang={string.lang}>{text(data.strings.title[indx].label, data.strings.title[indx].text, data.strings.title[indx].group)}</font.main.tag>
											<font.sub.tag lang={string.lang}>{text(data.strings.sub[indx].label, data.strings.sub[indx].text, data.strings.sub[indx].group)}</font.sub.tag>
										</div>	
									)
								}
							</div>	
						</div>	
					)
				}
			</div>
		</div>	
	)	
})
