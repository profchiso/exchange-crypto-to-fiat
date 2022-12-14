import React,{useState} from 'react'
import moment from 'moment';
import { PageHeader,Row,Col,Table,Statistic} from 'antd';
import {
  ArrowRightOutlined,
  ArrowLeftOutlined
} from '@ant-design/icons';

const columns = [
  {
    title: 'Date & Time',
    dataIndex: 'createdAt',
    key: 'createdAt',
    sorter: (a, b) => a.createdAt - b.createdAt,
    sortDirections: ["descend", "ascend"],
    responsive: ["sm"],
     render(text,record){
      return{
        props:{
          
        },
        children:<span>{moment(record.createdAt).format('DD/MM/YYYY  hh:mm')}</span>
      }
    }
  },
  {
    title: 'Currency From',
    dataIndex: 'currencyFrom',
    key: 'currencyFrom',
    sorter: (a, b) => a.currencyFrom - b.currencyFrom,
    sortDirections: ["descend", "ascend"],
    responsive: ["sm"],
  },
  {
    title: 'Amount 1',
    dataIndex: 'amount1',
    key: 'amount1',
    sorter: (a, b) => a.amount1 - b.amount1,
    sortDirections: ["descend", "ascend"],
    responsive: ["sm"],
  },
   {
    title: 'Currency To',
    dataIndex: 'currencyTo',
    key: 'currencyTo',
    sorter: (a, b) => a.currencyTo - b.currencyTo,
    sortDirections: ["descend", "ascend"],
    responsive: ["sm"],
  },
   {
    title: 'Amount 2',
    dataIndex: 'amount2',
    key: 'amount2',
    sorter: (a, b) => a.amount2 - b.amount2,
    sortDirections: ["descend", "ascend"],
    responsive: ["sm"],
    render(text,record){
      return{
        props:{
          // style:{color:text==="Live Price"?"#5dbe7e":"#6368df"}
        },
        children:<Statistic precision={2} value={text} valueStyle={{fontFamily:"Red Hat Display",fontStyle:"normal",fontWeight:"400",fontSize:"14px",lineHeight:"152.2%"}}></Statistic>
      }
    }
  },
  {
    title: 'Type',
    dataIndex: 'type',
    key: 'type',
    sorter: (a, b) => a.type - b.type,
    sortDirections: ["descend", "ascend"],
    responsive: ["sm"],
    render(text,record){
      return{
        props:{
          style:{color:text==="Live Price"?"#5dbe7e":"#6368df"}
        },
        children:<div>{text}</div>
      }
    }
  },
];



const TableCard=({tableData}) =>{
 
  const [current, setCurrent]= useState(1)

  const onChange=(pagination, filters, sorter, extra) => {
    setCurrent(pagination.current)
  }
  return (
    <>
     <PageHeader
            ghost={false}
            className="table-header"
          >
           
             <Row>
               <Col span={24} >
                <Table 
                  columns={columns} 
                  dataSource={tableData} 
                  size="small"  
                  pagination={{
                    current:current,
                    pageSize:4,
                    position:["bottomLeft"],
                     total:tableData.length, 
                     itemRender(current, type, originalElement) {
                      if (type === 'prev') {
                        return <ArrowLeftOutlined />;
                      } if (type === 'next') {
                        return <span style={{lineHeight:"24px",color:"#565D5F",display:"flex", alignItems: "center",fontWeight:400,paddingRight:"8px"}}>Next <ArrowRightOutlined style={{paddingLeft:"8px"}} /></span>;
                      }
                      return originalElement;
                
                     }
                    
                    }}
                  defaultPageSize={4} 
                  sortDirections={["decend"]} 
                  rowClassName={(record, index) => index % 2 === 0 ? 'table-row-light' :  'table-row-dark'}
                   onChange={onChange}
                  onRow={(record) => {
                    return {
                      onClick: event => {
                        
                        console.log(event.target)
                        //event.target.classlist.add("table-row-click-style") 
                      }, 
                    };
                  }}
                 
                  />
                  
               </Col>
            </Row>
          </PageHeader>
    </>
  )
}

export default TableCard