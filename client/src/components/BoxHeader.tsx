import Flexbetween from './FlexBetween'
import { Box, Typography, useTheme } from '@mui/material'

type Props = {
    title: string
    subtitle: string
    sideText: string
    icon?: React.ReactNode
}

const BoxHeader = ({ icon, title , subtitle , sideText}: Props) => {
    const { palette } = useTheme()
  return (
    <Flexbetween color={palette.grey[400]} margin=" 1.5rem 1rem 0 1rem">
        <Flexbetween>
            {icon}
            <Box width="100%">
                <Typography variant='h4' mb="-0.1rem">
                    {title}
                </Typography>
                <Typography variant='h6'>{subtitle}</Typography>
            </Box>
        </Flexbetween>
        <Typography variant='h5' fontWeight="700" color={palette.secondary[500]}>
            {sideText}
        </Typography>
    </Flexbetween>
  )
}

export default BoxHeader