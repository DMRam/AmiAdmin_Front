import React from 'react'
import { Column, FlexGrid, Row } from '@carbon/react'
import { TileComp } from '../tiles/TileComp'
import './flexgridst.scss'

export const FlexGridCom = () => {
    return (
        <>
            <FlexGrid fullWidth>
                <Row>
                    <Column span>
                        {/* <h1>A</h1> */}
                        <TileComp name='Bought' />

                    </Column>
                    <Column span>
                        {/* <h1>B</h1> */}
                        <TileComp name='Sales' />

                    </Column>
                    <Column span>
                        {/* <h1>C</h1> */}
                        <TileComp name='Clients' />

                    </Column>
                </Row>
                <br />
                <Row>
                    <Column span>
                        {/* <h1>A</h1> */}
                        <TileComp name='Accounting' />

                    </Column>
                    <Column span>
                        {/* <h1>B</h1> */}
                        <TileComp name='HR' />

                    </Column>
                    <Column span>
                        {/* <h1>C</h1> */}
                        <TileComp name='Investing' />

                    </Column>
                </Row>
            </FlexGrid>
        </>

    )
}
