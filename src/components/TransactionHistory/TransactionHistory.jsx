import PropTypes from 'prop-types';
import { Table, TableHead, TableHeadTr, TableHeadTrTh, TableBody, TableBodyTr, TableBodyTrTd } from './TransactionHistory.styled';

export const TransactionHistory = ({ items }) => {
    return (
    <Table>
        <TableHead>
            <TableHeadTr>
                <TableHeadTrTh>Type</TableHeadTrTh>
                <TableHeadTrTh>Amount</TableHeadTrTh>
                <TableHeadTrTh>Currency</TableHeadTrTh>
            </TableHeadTr>
        </TableHead>

            <TableBody>{items.map(({ id, type, amount, currency }) => (
            <TableBodyTr key={id}>
                <TableBodyTrTd>{type}</TableBodyTrTd>
                <TableBodyTrTd>{amount}</TableBodyTrTd>
                <TableBodyTrTd>{currency}</TableBodyTrTd>
            </TableBodyTr>
        ))}
    </TableBody>
</Table>
    )
}

TransactionHistory.prototypes = {
    items: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        amount: PropTypes.string.isRequired,
        currency: PropTypes.string.isRequired,
    })).isRequired
}