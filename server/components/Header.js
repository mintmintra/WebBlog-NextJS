import React, { Component } from 'react';
import Link from "next/link";


class Header extends Component{
    constructor(props) {
        super(props);
        this.state = { data: new Date() };
    }

    componentDidMount() {
        this.timerID = setInterval(() => this.tick(), 1000);
    }

    componentDidUpdate() {
        
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick() {
        this.setState({ data: new Date() });
    }
    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-8 text-left">
                        <h1 className="text-dark mt-4">
                            <img src="/static/images/logo/logo.png" alt="" />{" "}
                            Mintra Blog{" "}
                        </h1>
                    </div>
                    <div className="col-md-4 text-right">
                        <h5 className="text-muted mt-4">{this.state.data.toLocaleTimeString()}</h5>
                        <ul className="list-inline">
                            <li className="list-inline-item title"><Link href="/">หน้าหลัก</Link></li>
                            <li className="list-inline-item title">|</li>
                            <li className="list-inline-item title"><Link href="/about">เกี่ยวกับเรา</Link></li>
                        </ul>
                        
                    </div>
                </div>
                <hr />
            </div>
        )
    }
}

export default Header;