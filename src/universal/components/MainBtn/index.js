import React, {Component, PropTypes} from 'react'
import ReactDOM from 'react-dom'

import cx from 'classnames' 
import styles from './style.css'



class MainBtn extends React.Component { 


	render() {
		
		const { 
			lang,

			text,
			icon,
			isMedium,
			isSmall, 
			isReverse,
			isDisabled } = this.props

		const btnClass  = cx(styles.mainBtn, {
			[styles.medium]: isMedium || icon,
		  	[styles.small]: isSmall,
		  	[styles.reverse]: isReverse,
		  	[styles.disabled]: isDisabled,
		})

	  	return (
	  		<div className={ btnClass }>
		    	{ icon?<div className={ styles.btnIcon }><img src={ icon } alt='btn-icon' /></div>:null }
		    	<div lang={lang} className={ styles.btnText }>{ text }</div>
		    </div>    
		)
	}
	
}

MainBtn.propTypes = {
	text: PropTypes.string,
	icon: PropTypes.string,
	isMedium: PropTypes.bool,
	isSmall: PropTypes.bool,
	isReverse: PropTypes.bool,
	isDisabled: PropTypes.bool,
}

export default MainBtn
