import React from 'react'
import { Tab } from 'semantic-ui-react'
import '../css/Header.css'
<<<<<<< HEAD
import {BodyA} from './BodyA.js'
import {BodyB} from './BodyB.js'
import {BodyC} from './BodyC.js'
=======
import { BodyA } from './BodyA.js'
import { BodyB } from './BodyB.js'
import { BodyC } from './BodyC.js'
import { BodyD } from './BodyD.js'

// var arr = []
>>>>>>> f487522fa0efc9dabf4e6111323c69df781c3b54

export class Header extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            countData: 0,
            bodyA: '',
            bodyB: '',
            bodyC: ''
        }
    }

    getStateFormA = (state) => {
        // console.log(state)
        this.setState({
            bodyA: state
        }, () => {
            console.log(this.state)
        })
    }

    getStateFormB = (state) => {
        this.setState({
            bodyB: state
        }, () => {
            console.log(this.state)
        })
    }

    getStateFormC = (state) => {
        this.setState({
            bodyC: state
        }, () => {
            console.log(this.state)
        })
    }

    getDataCount = (count) => {
        // console.log(typeof count)
        this.setState({
            countData: count
        }, () => {
            console.log('count',this.state.countData)
        })
    }

    render() {
        const panes = [
<<<<<<< HEAD
            { menuItem: 'Step1', render: () => <BodyA /> },
            { menuItem: 'Step2', render: () => <BodyB /> },
            { menuItem: 'Step3', render: () => <BodyC /> }
=======
            // { menuItem: 'Step1', render: () => <BodyA getStateFormA={this.getStateFormA} /> },
            { menuItem: 'Step2', render: () => <BodyB getStateFormB={this.getStateFormB} getDataCount={this.getDataCount} /> },
            { menuItem: 'Step3', render: () => <BodyC getStateFormC={this.getStateFormC} countData={this.state.countData} /> },
            { menuItem: 'Step4', render: () => <BodyD /> }
>>>>>>> f487522fa0efc9dabf4e6111323c69df781c3b54
        ]
        return (
            <div>
                <div className='div-card'>
                    <Tab panes={panes} getStateFormA={this.getStateFormA} />
                </div>
            </div>
        )
    }
}