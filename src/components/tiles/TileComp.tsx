import React from 'react'
import { AspectRatio, Button, ClickableTile, Column, ExpandableTile, Grid, Link, StructuredListBody, StructuredListCell, StructuredListHead, StructuredListRow, StructuredListWrapper, TileAboveTheFoldContent, TileBelowTheFoldContent } from '@carbon/react'
import './styles_tiles.scss'
// import { TileGroup, RadioTile } from 'carbon-components-react'


interface Props {
    name: string
}
export const TileComp = ({ name }: Props) => {
    return (
        <div style={{
            width: '400px'
        }}>
            <ClickableTile id="clickable-tile-1" href="https://www.carbondesignsystem.com/" >
                {name}
            </ClickableTile>

        </div>
    )
}
