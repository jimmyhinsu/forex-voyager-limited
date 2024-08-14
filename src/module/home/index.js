import React from 'react'
import "./home.scss";
import Herobanner from './herobanner';
import Platforms from './platforms';
import Ourproductslidesection from './Product';
import Brokersprogramsections from './Brokersprogramsections';
import Wanttoget from './wanttoget';
import Accountssection from './Accountssections';
import Gotonext from './gotonext';
import Whyselectussection from './whyselectussection';

export default function Home() {
    return (
        <>
            <Herobanner />
            <Ourproductslidesection />
            <Platforms />
            <Accountssection />
            <Brokersprogramsections />
            <Whyselectussection />
            <Gotonext />
            <Wanttoget />
        </>
    )
}
