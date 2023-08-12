import React from 'react'
import { Text, Link } from 'components'

const PoweredBy: React.FC<unknown> = () => {
  return (
    <div className="powered-by">
      <Text mb={0} font="14px" type="secondary">
        Сделано людьми 
      </Text>
      <Text mt={0} font="14px" type="secondary">
        в АО {' '}
        <Link color target="_blank" rel="noreferrer nofollow" href="/">
          Портал
        </Link>
      </Text>
      <style jsx>{`
        .powered-by {
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          margin-top: 30px;
        }
      `}</style>
    </div>
  )
}

export default PoweredBy
