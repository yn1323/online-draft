import React from 'react'
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  makeStyles,
} from '@material-ui/core'
import { ExpandMore } from '@material-ui/icons'

interface Content {
  element: JSX.Element
  title: string
}

interface Props {
  contents: Content[]
  icon?: JSX.Element
  isRotate?: boolean
}

const useStyles = makeStyles({
  expandIcon: {
    '&$expanded': {
      transform: 'translateY(0) rotate(0deg)',
    },
  },
  expanded: {},
})

const ExpandList = ({
  contents = [],
  icon = <ExpandMore />,
  isRotate = true,
}: Props) => {
  const classes = useStyles()
  const renderOneConent = (element: JSX.Element, title: string, i: number) => (
    <Accordion key={i}>
      <AccordionSummary
        classes={
          !isRotate
            ? {
                expandIcon: classes.expandIcon,
                expanded: classes.expanded,
              }
            : {}
        }
        expandIcon={icon}
      >
        <Typography>{title}</Typography>
      </AccordionSummary>
      <AccordionDetails>{element}</AccordionDetails>
    </Accordion>
  )

  return (
    <div>
      {contents.map(({ element, title }: Content, i) =>
        renderOneConent(element, title, i)
      )}
    </div>
  )
}

export default ExpandList
