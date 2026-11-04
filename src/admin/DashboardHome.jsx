import { useSelector } from 'react-redux';

import { Link } from 'react-router-dom';

function DashboardHome() {

    const products = useSelector(state => state.products);

    const users = useSelector(state => state.users);

    const requests = useSelector(state => state.requests);

    const pending = products.filter(
        p => p.status === 'pending'
    );

    return (

        <div>

            <p className="eyebrow">CAMPUSCART CONTROL CENTRE </p>

            <h2>Admin overview</h2>

            <p className="muted">
                A quick view of what's happening in your marketplace.
            </p>

            <div className="stat-grid">

                <div className="stat-card">
                    <strong>{users.length}</strong>
                    <span>Registered students</span>
                </div>

                <div className="stat-card">
                    <strong>{products.length}</strong>
                    <span>Total products</span>
                </div>

                <div className="stat-card">
                    <strong>{pending.length}</strong>
                    <span>Pending approvals</span>
                </div>

                <div className="stat-card">
                    <strong>{requests.length}</strong>
                    <span>Product requests</span>
                </div>

            </div>

            <div className="section-heading">

                <h2>Needs your attention</h2>

                <Link to="/admin/products">
                    Review products →
                </Link>

            </div>

            {pending.length > 0 ?

                pending.slice(0, 5).map(p => (

                    <div className="admin-list-row" key={p.id}>

                        <span>
                            <b>{p.name}</b>
                            <small>Submitted by {p.seller}</small>
                        </span>

                        <span className="status-pill pending">
                            Pending
                        </span>

                    </div>

                ))

                :

                <p className="empty-state">
                    No products waiting for approval.
                </p>

            }

        </div>

    );

}

export default DashboardHome;