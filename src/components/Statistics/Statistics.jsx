import PropTypes from 'prop-types';
import { Section, Title, StatisticsList, StatisticsItem, Label, Percentage} from './Statistics.styled';


export const Statistics = ({title=" ", stats}) => {
    return (
        <Section>
            {title && <Title>{title}</Title>}
            <StatisticsList>{stats.map(({ id, label, percentage }) => (
                <StatisticsItem key={id}>
                    <Label>{label}</Label>
                    <Percentage>{percentage}%</Percentage>
                </StatisticsItem>))}
            </StatisticsList>
        </Section>
    );
}

Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(
        PropTypes.exact({
            id: PropTypes.string.isRequired,
            label: PropTypes.string.isRequired,
            percentage: PropTypes.number.isRequired
    })).isRequired
}