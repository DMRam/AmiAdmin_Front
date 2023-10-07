import { StructuredListWrapper, StructuredListHead, StructuredListRow, StructuredListCell, StructuredListBody, Button } from '@carbon/react'
import React from 'react'

export const StructList = () => {
    return (
        <>
            <StructuredListWrapper >
                <StructuredListHead>
                    <StructuredListRow head>
                        <StructuredListCell head>Transaction</StructuredListCell>
                        <StructuredListCell head>Date</StructuredListCell>
                        <StructuredListCell head>Product</StructuredListCell>
                        <StructuredListCell head>Price</StructuredListCell>
                        <StructuredListCell head>Description</StructuredListCell>
                        <StructuredListCell head>Details</StructuredListCell>
                    </StructuredListRow>
                </StructuredListHead>
                <StructuredListBody >
                    <StructuredListRow>
                        <StructuredListCell noWrap>Sale</StructuredListCell>
                        <StructuredListCell noWrap>Row 1</StructuredListCell>
                        <StructuredListCell>Row 1</StructuredListCell>
                        <StructuredListCell>$$$$</StructuredListCell>
                        <StructuredListCell>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc dui
                            magna, finibus id tortor sed, aliquet bibendum augue. Aenean posuere
                            sem vel euismod dignissim. Nulla ut cursus dolor. Pellentesque
                            vulputate nisl a porttitor interdum.
                        </StructuredListCell>
                        <StructuredListCell><Button>Go</Button></StructuredListCell>
                    </StructuredListRow>
                    <StructuredListRow>
                        <StructuredListCell noWrap>Bought</StructuredListCell>
                        <StructuredListCell noWrap>Row 2</StructuredListCell>
                        <StructuredListCell>Row 2</StructuredListCell>
                        <StructuredListCell>$$$$</StructuredListCell>
                        <StructuredListCell>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc dui
                            magna, finibus id tortor sed, aliquet bibendum augue. Aenean posuere
                            sem vel euismod dignissim. Nulla ut cursus dolor. Pellentesque
                            vulputate nisl a porttitor interdum.
                        </StructuredListCell>
                        <StructuredListCell><Button>Go</Button></StructuredListCell>
                    </StructuredListRow>
                </StructuredListBody>
            </StructuredListWrapper>
        </>
    )
}
