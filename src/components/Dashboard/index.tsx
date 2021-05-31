import { Summary } from "../Summary";
import { TransactionTables } from "../TransactionsTable";
import { Container } from "./styles";

export function Dashboard() {
    return (
        <Container>
            <Summary />
            <TransactionTables />
        </Container>
    )
}