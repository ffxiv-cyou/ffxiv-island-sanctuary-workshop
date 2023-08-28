mod bruce_force;
mod simplify;
mod solver_single;
mod solver_with_batch;

use super::simulator::Batch;
pub use bruce_force::BFSolver;
pub use simplify::SimplifySolver;
pub use solver_single::SolverSingle;
pub use solver_with_batch::{BatchWithBatch, SolverWithBatch};

use crate::data::Recipe;

/// 求解器限制
#[derive(Debug, Clone, Copy)]
pub struct SolveLimit<'a> {
    /// 配方最高等级
    level: u8,
    /// 禁用配方
    ban_list: &'a [u16],
    /// 结果数量
    pub max_result: usize,
    /// 是否考虑成本
    pub with_cost: bool,
    /// 工序耗时限制
    pub time: u16,
}

impl<'a> SolveLimit<'a> {
    pub fn new(level: u8, ban_list: &'a [u16], time: u16, with_cost: bool) -> SolveLimit {
        Self {
            level,
            ban_list,
            max_result: 100,
            with_cost,
            time,
        }
    }

    pub fn check(&self, recipe: &Recipe) -> bool {
        return recipe.level <= self.level && !self.ban_list.contains(&recipe.id);
    }
}
