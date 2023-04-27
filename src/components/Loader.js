import React from 'react'
// import { Spinner } from 'react-bootstrap'
import './loader.css'
function Loader() {
    return (
        <>
        <div aria-label="Orange and tan hamster running in a metal wheel" role="img" class="wheel-and-hamster">
	<div class="wheel"></div>
	<div class="hamster">
		<div class="hamster__body">
			<div class="hamster__head">
				<div class="hamster__ear"></div>
				<div class="hamster__eye"></div>
				<div class="hamster__nose"></div>
			</div>
			<div class="hamster__limb hamster__limb--fr"></div>
			<div class="hamster__limb hamster__limb--fl"></div>
			<div class="hamster__limb hamster__limb--br"></div>
			<div class="hamster__limb hamster__limb--bl"></div>
			<div class="hamster__tail"></div>
		</div>
	</div>
	<div class="spoke"></div>
</div>
        </>
        // <Spinner
        //     animation='border'
        //     role='status'
        //     style={{
        //         height: '100px',
        //         width: '100px',
        //         margin: 'auto',
        //         display: 'block'
        //     }}
        // >
        //     <span className='sr-only'>Loading...</span>
        // </Spinner>
    )
}

export default Loader
