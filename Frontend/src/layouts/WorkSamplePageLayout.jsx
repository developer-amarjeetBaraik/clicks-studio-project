import React, { Suspense } from 'react'
import style from './WorkSamplePageLayout.module.css'
import ContactForm from '../components/ContactForm'

const SomeGlimps = React.lazy(() => import('../components/SomeGlimpses'))

const WorkSamplePageLayout = () => {
    return (
        <div className={style.workSamplePageLayoutDiv}>
            <h3>These are few of our works</h3>
            <Suspense fallback={<div className={style.workSamplePageLayoutDiv}>
                <h3>Loading...</h3>
            </div>}>
                <SomeGlimps />
            </Suspense>
            <ContactForm />
        </div>
    )
}

export default WorkSamplePageLayout
