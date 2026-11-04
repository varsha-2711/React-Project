import { useSelector } from 'react-redux';

function Reports() {

    const products = useSelector(state => state.products);

    const users = useSelector(state => state.users);

    const requests = useSelector(state => state.requests);

    const categories = useSelector(state => state.categories);

    return (

        <div>

            <p className="eyebrow">
                MARKETPLACE INSIGHTS
            </p>

            <h2>Reports</h2>

            <div className="stat-grid">

                <div className="stat-card">
                    <strong>
                        {products.filter(
                            p => p.status === 'approved'
                        ).length}
                    </strong>
                    <span>Live products</span>
                </div>

                <div className="stat-card">
                    <strong>
                        {products.filter(
                            p => p.status === 'pending'
                        ).length}
                    </strong>
                    <span>Pending products</span>
                </div>

                <div className="stat-card">
                    <strong>
                        {requests.filter(
                            r => r.status === 'pending'
                        ).length}
                    </strong>
                    <span>Pending requests</span>
                </div>

                <div className="stat-card">
                    <strong>{users.length}</strong>
                    <span>Students</span>
                </div>

            </div>

            <h3 className="report-title">
                Products by category
            </h3>

            <div className="table-wrap">

                <table>

                    <thead>

                        <tr>
                            <th>Category</th>
                            <th>Products</th>
                            <th>Approved</th>
                            <th>Pending</th>
                        </tr>

                    </thead>

                    <tbody>

                        {categories.map(c => (

                            <tr key={c}>

                                <td>{c}</td>

                                <td>
                                    {products.filter(
                                        p => p.category === c
                                    ).length}
                                </td>

                                <td>
                                    {products.filter(
                                        p =>
                                            p.category === c &&
                                            p.status === 'approved'
                                    ).length}
                                </td>

                                <td>
                                    {products.filter(
                                        p =>
                                            p.category === c &&
                                            p.status === 'pending'
                                    ).length}
                                </td>

                            </tr>

                        ))}

                    </tbody>

                </table>

            </div>

        </div>

    );

}

export default Reports;