/**
 * External dependencies
 */
import React, { Component } from 'react';
import { findDOMNode } from 'react-dom';
/**
 * Internal dependencies
 */
import viewport from 'lib/viewport';
import HappychatConnection from 'components/happychat/connection';
import Composer from 'components/happychat/composer';
import Notices from 'components/happychat/notices';
import Timeline from 'components/happychat/timeline';

/**
 * React component for rendering a happychat client as a full page
 */
class HappychatPage extends Component {
	onFocus() {
		// TODO: Is this function ever called? I can't seem to get it to trigger --mattwondra
		const composerNode = findDOMNode( this.refs.composer );

		if ( viewport.isMobile() ) {
			/* User tapped textfield on a phone. This shows the keyboard. Unless we scroll to the bottom, the chatbox will be invisible */
			setTimeout( () => composerNode.scrollIntoView(), 500 );	/* Wait for the keyboard to appear */
		}
	}

	render() {
		return (
			<div className="happychat__page" aria-live="polite" aria-relevant="additions">
				<HappychatConnection />
				<Timeline />
				<Notices />
				<Composer />
			</div>
		);
	}
}

export default HappychatPage;
