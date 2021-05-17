

//get all jobs=>/ api/v1/jobs

exports.getJobs=(rew, res, next)=>{
    res.status(200).json({
        success:true,
        message:'This route will display all jobs in the future'
    });
}