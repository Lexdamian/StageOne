import React, { Component } from 'react';
import ModalImage from 'react-modal-image';

class Overview extends Component {
    render() {
        return (
            <React.Fragment>
            <section className="overview-section software-overview ptb-100">
                <div className="container">
                    <div className="overview-box">
                        <div className="row h-100 justify-content-center align-items-center">
                            <div className="col-lg-6 col-md-6 overview-img">
                                <ModalImage
                                    small={'/images/overview-stageon.png' }
                                    medium={'/images/overview-stageon.png' }
                                    alt='stageone-overview'
                                    hideDownload={true}
                                    hideZoom={true}
                                />
                            </div>

                            <div className="col-lg-6 col-md-6 overview-content">
                                <h3>Operationalizing the MITRE ATT&CK Framework</h3>
                                <p>StageOne is an adversarial attack simulation framework designed to emulate the modus operandi of Advanced Persistent Threats based on MITRE ATT&CK™, which is a globally - accessible knowledge base of adversary tactics and techniques based on real-world observations. The ATTACK knowledge base is used as a foundation for the development of specific threat models and methodologies in the private sector, in government, and in the cybersecurity product and service community.</p>

                                <ul className="features-list">
                                    <li>Advanced Persistent Threat</li>
                                    <li>Lateral Movement
                                        {/* <span className="tooltiptext">The ability to move laterally on the network is a major point of StageOne and adversarial attack simulation in general. Our tool is designed to help the read team operator to compromise systems on the same network using various lateral movement techniques like WMI, Pass-the-hash, PowerShell remoting.</span> */}
                                    </li>
                                    <li>Run binaries in-memory</li>
                                    <li>Credential extraction</li>
                                    <li>Covert communication</li>
                                    <li>Upload and download files</li>
                                    <li>Keylogging</li>
                                    <li>User friendly interface</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="overview-section software-overview ptb-100 bg-gray">
                <div className="container">
                    <div className="overview-box">
                        <div className="row h-100 justify-content-center align-items-center">
                            <div className="col-lg-6 col-md-6 overview-content">
                                <p>When StageOne is deployed in the security infrastructure, it continuously tests different security measures in order to validate security controls using attack emulations. These emulations assist Red and Blue Teams to measure the effectiveness of security controls and find the gaps existent in the infrastructure before a hacker does it.</p>

                                {/* <ul className="features-list">
                                    <li>User Friendly</li>
                                    <li>High Security</li>
                                    <li>Free Updates</li>
                                    <li>QR Code Scaner</li>
                                    <li>User Friendly</li>
                                    <li>High Security</li>
                                    <li>Free Updates</li>
                                    <li>QR Code Scaner</li>
                                </ul> */}
                            </div>

                            <div className="col-lg-6 col-md-6 overview-img">
                                <ModalImage
                                    small={'/images/overview-stageone2.png' }
                                    medium={'/images/overview-stageone2.png' }
                                    alt='stageone-overview'
                                    hideDownload={true}
                                    hideZoom={true}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            </React.Fragment>
        );
    }
}

export default Overview;
