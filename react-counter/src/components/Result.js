import React from 'react'

class Result extends React.Component {
    render(){
        const { isEven, color, likes } = this.props

        return <div
                style={{ color: color, fontSize: '70px' }}
                className={'myClass ' + (isEven ? 'even' : 'odd')}
            >
            Total likes: {likes}
        </div>
    }
}

export default Result