import React from 'react';
import { Accordion, ListGroup } from 'react-bootstrap';
import './Details.css';
const Details = () => {
    return (
        <>
            <section className="container gray py-2">
                <div className="col-lg-12 col-md-12 order-lg-first">
                    {/* Overview  */}
                    <div className="edu_wraper">
                        <h2 className="edu_title">Course Overview</h2>
                        <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.</p>
                        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</p>
                        <h6>Requirements</h6>
                        <ul className="lists-3">
                            <li>At vero eos et accusamus et iusto odio dignissimos ducimus</li>
                            <li>At vero eos et accusamus et iusto odio dignissimos ducimus</li>
                            <li>At vero eos et accusamus et iusto odio dignissimos ducimus</li>
                            <li>At vero eos et accusamus et iusto odio dignissimos ducimus</li>
                            <li>At vero eos et accusamus et iusto odio dignissimos ducimus</li>
                        </ul>
                    </div>
                    <h4 className="edu_title">Course Circullum</h4>
                </div>
                <Accordion defaultActiveKey="0">
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>Part 01: How To Learn Web Designing Step by Step</Accordion.Header>
                        <Accordion.Body>
                            <ListGroup variant="flush">
                                <ListGroup.Item>Web Designing Beginner</ListGroup.Item>
                                <ListGroup.Item>Startup Designing with HTML5 & CSS3</ListGroup.Item>
                                <ListGroup.Item>How To Call Google Map iFrame</ListGroup.Item>
                                <ListGroup.Item>Create Drop Down Navigation Using CSS3</ListGroup.Item>
                                <ListGroup.Item>How to Create Sticky Navigation Using JS</ListGroup.Item>
                            </ListGroup>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                        <Accordion.Header>Part 02: Learn Web Designing in Basic Level</Accordion.Header>
                        <Accordion.Body>
                            <ListGroup variant="flush">
                                <ListGroup.Item>How To Call Google Map iFrame</ListGroup.Item>
                                <ListGroup.Item>How To embed video in html5 banner?</ListGroup.Item>
                                <ListGroup.Item>How to use SVG card in html5?</ListGroup.Item>
                                <ListGroup.Item>Create Drop Down Navigation Using CSS3</ListGroup.Item>
                                <ListGroup.Item>How to Create Sticky Navigation Using JS</ListGroup.Item>
                            </ListGroup>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="2">
                        <Accordion.Header>Part 03: Learn Web Designing in Advance Level</Accordion.Header>
                        <Accordion.Body>
                            <ListGroup variant="flush">
                                <ListGroup.Item>How To Call Google Map iFrame</ListGroup.Item>
                                <ListGroup.Item>How To embed video in html5 banner?</ListGroup.Item>
                                <ListGroup.Item>How to use SVG card in html5?</ListGroup.Item>
                                <ListGroup.Item>Create Drop Down Navigation Using CSS3</ListGroup.Item>
                                <ListGroup.Item>How to Create Sticky Navigation Using JS</ListGroup.Item>
                            </ListGroup>
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </section>
        </>
    );
};

export default Details;